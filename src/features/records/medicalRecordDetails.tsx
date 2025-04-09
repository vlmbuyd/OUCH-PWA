// 기존의 medicalDetail 배열은 그대로 사용
const medicalDetail = [
  { title: "Date of visit", value: "2024.11.24" },
  { title: "Visiting Hospital", value: "Hanyang Hospital" },
  { title: "Medical Subjects", value: "sgdggsdgfg" },
  { title: "Symptoms", value: "sgdfgsdgfg" },
  { title: "Treatment Summary", value: "Hanyang Hospital" },
];

export default function MedicalRecordDetails() {
  return (
    <div style={styles.container}>
      {medicalDetail.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.recordItemTop,
            ...(index === medicalDetail.length - 1 && styles.cornerRadiusTop),
          }}
        >
          <p style={styles.labelTop}>{item.title}</p>
          <p style={styles.valueTop}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#F5F9FC",
  },
  recordItemTop: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    height:78,
    borderBottom: "1px solid #E5E7EB",
    width:"100%",
  },
  labelTop: {
    fontSize: 16,
    fontWeight: 400,
    color: "#000",
    paddingTop:18,
    paddingBottom:4,
  },
  valueTop: {
    fontSize: 14,
    color: "#656565",
    fontWeight: 400,
    marginBottom: 9,
  },
  cornerRadiusTop: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom:-14,
  },
};
