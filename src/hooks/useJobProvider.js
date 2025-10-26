import { useContext } from "react";
import { JobContext } from "../components/JobContext";

export const useJobProvider = () => useContext(JobContext);
