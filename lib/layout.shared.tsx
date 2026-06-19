import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="4" />
            <line x1="15" y1="1" x2="15" y2="4" />
            <line x1="9" y1="20" x2="9" y2="23" />
            <line x1="15" y1="20" x2="15" y2="23" />
            <line x1="20" y1="9" x2="23" y2="9" />
            <line x1="20" y1="14" x2="23" y2="14" />
            <line x1="1" y1="9" x2="4" y2="9" />
            <line x1="1" y1="14" x2="4" y2="14" />
          </svg>
          ThunderHub
        </span>
      ),
    },
    githubUrl: 'https://github.com/apotdevin/thunderhub',
  };
}

export function sidebarFooterLinks() {
  return (
    <div className="flex flex-col gap-1 border-t border-fd-border pt-3 text-sm">
      <a
        href="https://thunderhub.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fd-muted-foreground hover:text-fd-foreground"
      >
        ThunderHub.io
      </a>
      <a
        href="https://twitter.com/thunderhubio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fd-muted-foreground hover:text-fd-foreground"
      >
        Twitter
      </a>
      <a
        href="https://t.me/thunderhub"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fd-muted-foreground hover:text-fd-foreground"
      >
        Telegram
      </a>
    </div>
  );
}
