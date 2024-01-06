import { v4 as uuidv4 } from "uuid";

const date = new Date();
const fullMonth = date.getMonth();
const fullDate = date.getDate();
const fullYear = date.getFullYear();

function Card({ title, dasc, phones }) {
  return (
    <div>
      <div className="card">
        <h4 className="cardTitle">{title}</h4>
        <p className="cardDase">{dasc}</p>
        <p className="cardFotter">{`${fullDate}/${fullMonth}/${fullYear}`}</p>
        <div>
          {phones.map(({ phone, office }) => (
            <p key={uuidv4()}>
              {phone}
              {office}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
