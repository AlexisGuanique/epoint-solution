import { socialConfig } from "@/config/social";

type LinkedInLinkProps = {
  className?: string;
};

export function LinkedInLink({ className = "" }: LinkedInLinkProps) {
  const url = socialConfig.linkedInUrl;

  if (!url) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {socialConfig.linkedInLabel}
    </a>
  );
}
