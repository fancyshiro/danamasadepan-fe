// Helper function to parse Indonesian formatted numbers
const parseIndonesianNumber = (str: string): number => parseInt(str.replace(/\./g, "").replace(",", "."), 10);

// Helper function to format number for display
const formatNumber = (num: number): string => new Intl.NumberFormat("id-ID").format(num);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: Rp. {formatNumber(entry.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export {
  parseIndonesianNumber,
  formatNumber,
  CustomTooltip,
  daysOfWeek
}