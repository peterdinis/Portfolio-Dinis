export const Mailto = ({ email, subject = "", body = "", children }) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a className="text-3xl ml-2 text-red-700" href={`mailto:${email}${params}`}>
      {children}
    </a>
  );
};
