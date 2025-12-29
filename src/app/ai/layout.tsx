'use client';

import Sidebar from '@/components/Sidebar';

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ai-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>

      <style jsx>{`
        .ai-layout {
          display: flex;
          min-height: calc(100vh - 60px);
        }

        .main-content {
          flex: 1;
          margin-left: 300px;
          padding: 2rem 3rem;
          max-width: calc(100% - 300px);
        }

        @media (max-width: 1024px) {
          .main-content {
            margin-left: 260px;
            max-width: calc(100% - 260px);
            padding: 1.5rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 0;
            max-width: 100%;
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
