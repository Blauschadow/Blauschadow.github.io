interface ActivityItemProps {
  type: 'post' | 'game' | 'achievement';
  title: string;
  date: string;
  description?: string;
}

export function ActivityItem({ type, title, date, description }: ActivityItemProps) {
  const getTypeIcon = () => {
    switch (type) {
      case 'post':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" className="inline-block">
            <rect x="4" y="4" width="16" height="16" fill="none" stroke="#2563eb" strokeWidth="2"/>
            <rect x="8" y="8" width="8" height="2" fill="#2563eb"/>
            <rect x="8" y="12" width="8" height="2" fill="#2563eb"/>
            <rect x="8" y="16" width="5" height="2" fill="#2563eb"/>
          </svg>
        );
      case 'game':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" className="inline-block">
            <rect x="6" y="10" width="12" height="6" fill="#3b82f6"/>
            <rect x="8" y="11" width="2" height="2" fill="#60a5fa"/>
            <rect x="14" y="11" width="2" height="2" fill="#93c5fd"/>
            <rect x="15" y="13" width="2" height="2" fill="#93c5fd"/>
          </svg>
        );
      case 'achievement':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" className="inline-block">
            <rect x="11" y="4" width="2" height="2" fill="#fbbf24"/>
            <rect x="9" y="6" width="6" height="2" fill="#fbbf24"/>
            <rect x="7" y="8" width="10" height="2" fill="#fbbf24"/>
            <rect x="4" y="11" width="16" height="2" fill="#fbbf24"/>
            <rect x="7" y="13" width="10" height="2" fill="#fbbf24"/>
            <rect x="9" y="15" width="6" height="2" fill="#fbbf24"/>
          </svg>
        );
    }
  };

  const getTypeBadge = () => {
    const badges = {
      post: { text: 'POST', color: 'bg-primary text-primary-foreground' },
      game: { text: 'GAME', color: 'bg-accent text-accent-foreground' },
      achievement: { text: 'ACHIEVEMENT', color: 'bg-secondary text-secondary-foreground' }
    };
    const badge = badges[type];

    return (
      <span
        className={`px-2 py-1 border-2 ${badge.color}`}
        style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '7px' }}
      >
        {badge.text}
      </span>
    );
  };

  return (
    <div className="border-2 border-border bg-card/50 p-4 hover:border-primary transition-colors">
      <div className="flex items-start gap-4">
        <div className="mt-1">{getTypeIcon()}</div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {getTypeBadge()}
            <span
              className="text-muted-foreground"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '7px' }}
            >
              {date}
            </span>
          </div>

          <h3
            className="mb-2"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px', lineHeight: '1.8' }}
          >
            {title}
          </h3>

          {description && (
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px', lineHeight: '1.8' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
