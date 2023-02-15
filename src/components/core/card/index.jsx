import CardLayout from "./CardLayout";
import CCard from "./Card";

export default function Card({ cardData }) {
  if (cardData.length <= 1) {
    return <CCard data={cardData[0]} />;
  }

  return (
    <CardLayout>
      {cardData.map((v, i) => {
        return <CCard key={i} data={v} />;
      })}
    </CardLayout>
  );
}
