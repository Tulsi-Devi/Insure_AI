export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      <aside className="w-64 bg-[#020617] p-4">
        <h1 className="text-xl font-bold mb-6">InsurAI</h1>
        <ul className="space-y-3">
          <li>Dashboard</li>
          <li>Book Appointment</li>
          <li className="bg-blue-600 p-2 rounded">Apply for Policy</li>
          <li>My Policies</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="flex-1 p-10">
        <h2 className="text-3xl mb-6">Home Insurance Application</h2>

        <div className="bg-[#020617] p-6 rounded-xl w-2/3">
          <label>Address</label>
          <textarea className="w-full p-2 bg-gray-800 rounded mt-2" />

          <label className="block mt-4">Type of Home</label>
          <select className="w-full p-2 bg-gray-800 rounded">
            <option>Select Type</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
        </div>
      </main>
    </div>
  );
}
