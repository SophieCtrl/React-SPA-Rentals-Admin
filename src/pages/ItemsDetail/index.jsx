import { useParams } from "react-router-dom";
import RentalDetails from "../../components/RentalDetails";

export default function ItemsDetailPage() {
  const { rentalID } = useParams();
  console.log(rentalID);
  return <RentalDetails rentalID={rentalID} />;
}
