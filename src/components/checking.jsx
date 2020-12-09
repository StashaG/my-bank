import { connect } from "react-redux";

const Checking = ({ balance, transactions }) => {

  const chkTransactions = transactions.map((transaction, index) => {
    const { amount, date, destination } = transaction;
    return (
      <li key={`date-index`}>
        <span>{date}</span>
        <span>{destination}</span>
        <span>{amount}</span>
      </li>
    )
  });

  return (
    <div className="view">
      <h2>{balance}</h2>
      <ul className="checking-transactions">{chkTransactions}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  balance: state.checking.balance,
  transactions: state.checking.transactions
})

export default connect(mapStateToProps)(Checking);