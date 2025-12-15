import { useSelector } from "react-redux";

const generateHours = () => {
  const hours = [];
  for (let h = 9; h <= 18; h++) {
    hours.push(`${h.toString().padStart(2, "0")}:00`);
    hours.push(`${h.toString().padStart(2, "0")}:30`);
  }
  return hours;
};

export default function Planning() {
  const hours = generateHours();

  // 🔹 Get data from Redux
  const rendezVous = useSelector(state => Array.isArray(state.rendezVous) ? state.rendezVous : []);
  const consultations = useSelector(state => Array.isArray(state.consultations) ? state.consultations : []);

  const todayStr = new Date().toISOString().split("T")[0];

  const todayRendezVous = rendezVous.filter(r => r.date === todayStr);
  const todayConsultations = consultations.filter(c => c.date === todayStr);

  return (
    <div className="container mt-4">
      <h2>Planning Journalier</h2>

      <table className="table table-bordered mt-3 text-center">
        <tbody>
          {hours.map(time => {
            // Find rendez-vous at this time
            const appointment = todayRendezVous.find(r => r.heure === time);
            // Find consultation at this time
            const consultation = todayConsultations.find(c => c.date === todayStr && c.heure === time);

            return (
              <tr key={time}>
                <td style={{ width: "120px", fontWeight: "500" }}>{time}</td>
                <td style={{ minWidth: "200px" }}>
                  {appointment ? (
                    <span className="text-primary fw-bold">{appointment.patient}</span>
                  ) : consultation ? (
                    <span className="text-success fw-bold">{consultation.patient} (Consultation)</span>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
