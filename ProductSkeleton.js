export default function ProductSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden" style={{ background: 'white', border: '1px solid rgba(26,26,26,0.08)' }}>
      <div className="skeleton" style={{ height: '220px' }} />
      <div className="p-4 space-y-3">
        <div className="skeleton rounded" style={{ height: '16px', width: '80%' }} />
        <div className="skeleton rounded" style={{ height: '12px', width: '50%' }} />
        <div className="flex justify-between items-center mt-3">
          <div className="skeleton rounded" style={{ height: '24px', width: '60px' }} />
          <div className="skeleton rounded" style={{ height: '32px', width: '70px' }} />
        </div>
      </div>
    </div>
  );
}
