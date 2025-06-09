export default function PricingToggle({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 bg-white p-3 rounded-md shadow-sm font-poppins">
      <button
        className={`px-6 py-3 font-semibold rounded-md ${
          activeTab === "monthly"
            ? "bg-secondary text-white"
            : "text-secondary "
        }`}
        onClick={() => setActiveTab("monthly")}
      >
        Monthly
      </button>
      <button
        className={`px-6 py-3 font-semibold rounded-md ${
          activeTab === "yearly"
            ? "bg-secondary text-white"
            : "text-secondary "
        }`}
        onClick={() => setActiveTab("yearly")}
      >
        Yearly
      </button>
    </div>
  );
}
