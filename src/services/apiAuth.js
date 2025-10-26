import { supabase } from "./supabase";

export async function loginApi({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function logoutApi() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
  return true;
}

export async function RegisterApi({ firstName, lastName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (error) throw new Error(error.message);
  console.log("User registered:", data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function getSavedJobs() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("No user is logged in");
  }

  const { data, error } = await supabase
    .from("savedjobs")
    .select("data")
    .eq("userId", user.id);

  if (error) throw new Error(error.message);

  return data.map((row) => row.data);
}

export async function saveJob(job) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please logged in to save");

  const jobData = { userId: user.id, data: job };

  const { data: insertedData, error } = await supabase
    .from("savedjobs")
    .insert([jobData])
    .select();

  if (error) throw new Error(error.message);

  console.log("insertedData", insertedData);

  return insertedData?.[0] ?? null;
}

export async function unsaveJob(job_id) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Please logged in to save");

  const { data, error } = await supabase
    .from("savedjobs")
    .delete()
    .eq("userId", user.id)
    .eq("data->>job_id", job_id);

  if (error) throw new Error(error.message);

  return data;
}
