// Helper function to parse Indonesian formatted numbers
const parseIndonesianNumber = (str: string): number => parseInt(str.replace(/\./g, "").replace(",", "."), 10);

// Helper function to format number for display
const formatNumber = (value: number | string): string => {
  let numberValue;

  // Jika input berupa string, konversi ke number
  if (typeof value === "string") {
    const cleanValue = value.replace(/\D/g, "");
    numberValue = parseInt(cleanValue, 10) || 0;
  } else {
    numberValue = value;
  }

  return new Intl.NumberFormat("id-ID").format(numberValue);
};


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