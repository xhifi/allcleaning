import CardLayout from "./CardLayout";
import CCard from "./Card";

export default function Card({ cardData, cols, gutter }) {
  if (cardData.length > 1) {
    return (
      <CardLayout cols={cols} gutter={gutter}>
        {cardData.map((v, i) => {
          return <CCard key={i} data={v} />;
        })}
      </CardLayout>
    );
  }

  return <CCard data={cardData} />;
}
