import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-top: 20px;
`;

const TableElement = styled.table`
  width: max-content;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  word-break: break-word;
  font-size: 12px;
  font-family: poppins;
  font-weight: 600;
  color:#343442;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  word-break: break-word;
  font-size: 12px;
  font-family: poppins;
  font-weight: 500;
  color:#343442;

  &:last-child {
    background-color: transparent;
  }
`;

const NameCell = styled.div`
  display: flex;
  align-items: center;
  font-size:14px;

  .circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #b7cec4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;


const AnimatedBg = styled.div`
  padding: 10px;
  background: #a0c7d5;
  border-radius: 10px;
  max-width: 500px;
`;

interface TableData {
  name: string;
  phone: string;
  address: string;
  eventDate: string;
  eventSpecs: string;
}

const Table: React.FC = () => {
  const data: TableData[] = [
    {
      name: 'John Doe',
      phone: '1234567890',
      address: '123 Main St, City',
      eventDate: '2023-06-15',
      eventSpecs:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna sed elit eleifend finibus vitae id justo.',
    },
    {
      name: 'Jane Smith',
      phone: '9876543210',
      address: '456 Elm St, Town',
      eventDate: '2023-06-18',
      eventSpecs:
        'Nulla ut felis tristique, fermentum lectus id, accumsan nisl. Sed eu massa eget massa pulvinar eleifend et sit amet est.',
    },
    {
      name: 'Mike Johnson',
      phone: '5555555555',
      address: '789 Oak Ave, Village',
      eventDate: '2023-06-20',
      eventSpecs:
        'In sed justo vestibulum, posuere enim vitae, gravida lacus. Aliquam erat volutpat. Nullam dignissim convallis urna, vitae semper justo vestibulum eget.',
    },
  ];

  return (
    <TableContainer>
      <TableElement>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Address</TableHeader>
            <TableHeader>Event Date</TableHeader>
            <TableHeader>Event Specifications</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <TableCell><NameCell>
                <div className="circle">{item.name.charAt(0)}</div>
                <strong>{item.name}</strong>
              </NameCell></TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.eventDate}</TableCell>
              <TableCell>
                <AnimatedBg>{item.eventSpecs}</AnimatedBg>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </TableElement>
    </TableContainer>
  );
};

export default Table;
