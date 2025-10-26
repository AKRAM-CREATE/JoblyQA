import React from "react";

const JobDescriptionRenderer = ({ job }) => {
  if (!job) return null;

  const text = job.job_description || "";
  const sections = {};

  const overviewEnd = text.search(
    /(What is in it for you|Highlights|Job Description)/i
  );
  sections.companyOverview =
    overviewEnd >= 0 ? text.slice(0, overviewEnd).trim() : text;

  const perksMatch = text.match(
    /(What is in it for you|Highlights):?([\s\S]*?)(Job Description|Key\s*Responsibilities|Responsibilities|Qualifications|Additional Information|$)/i
  );
  sections.perks = perksMatch
    ? perksMatch[2]
        .split(/•|\n|-/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const jobDescMatch = text.match(
    /Job Description:?\s*([\s\S]*?)(Key\s*Responsibilities|Responsibilities|Key\s*Qualifications|Qualifications|Additional Information|$)/i
  );

  sections.jobDescription = jobDescMatch
    ? jobDescMatch[1]
        .trim()
        .split(/•|\n|-/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const responsibilitiesMatch = text.match(
    /(Responsibilities|Key\s*Responsibilities):?([\s\S]*?)(Qualifications|Key\s*Qualifications|Additional Information|$)/i
  );
  sections.responsibilities = responsibilitiesMatch
    ? responsibilitiesMatch[2]
        .split(/•|\n|-/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const qualificationsMatch = text.match(
    /(Qualifications|Key\s*Qualifications):?([\s\S]*?)(Additional Information|$)/i
  );
  sections.qualifications = qualificationsMatch
    ? qualificationsMatch[2]
        .split(/•|\n|-/)
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

  const {
    companyOverview,
    perks,
    jobDescription,
    responsibilities,
    qualifications,
  } = sections;

  return (
    <div className="space-y-6">
      {companyOverview && (
        <div>
          <h2 className="font-bold text-base mb-2">Company Overview</h2>
          <p className="text-sm whitespace-pre-line">{companyOverview}</p>
        </div>
      )}

      {perks.length > 0 && (
        <div>
          <h2 className="font-bold text-base mb-2">Perks & Highlights</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {perks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {jobDescription.length > 0 && (
        <div>
          <h2 className="font-bold text-base mb-2">Job Description</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {jobDescription.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {responsibilities.length > 0 && (
        <div>
          <h2 className="font-bold text-base mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {qualifications.length > 0 && (
        <div>
          <h2 className="font-bold text-base mb-2">Qualifications</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {qualifications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobDescriptionRenderer;
