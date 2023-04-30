const TableRow = ({ data }) => {
  const { name, abundance, knownFunction } = data || {};
  return (
    <tr>
      <td>{name}</td>
      <td>{abundance}</td>
      <td className="break-all whitespace-pre-wrap">{knownFunction}</td>
    </tr>
  );
};

export default TableRow;
