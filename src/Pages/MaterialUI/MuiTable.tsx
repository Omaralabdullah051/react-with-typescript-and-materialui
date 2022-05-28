import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple-table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        {tableData.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
            <TableCell align="center">{row.email}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Caresa",
    last_name: "Meardon",
    email: "cmeardon0@bing.com",
    gender: "Female",
    ip_address: "129.98.45.101",
  },
  {
    id: 2,
    first_name: "Claude",
    last_name: "Livoir",
    email: "clivoir1@scientificamerican.com",
    gender: "Female",
    ip_address: "76.42.189.172",
  },
  {
    id: 3,
    first_name: "Alexandr",
    last_name: "Siaskowski",
    email: "asiaskowski2@homestead.com",
    gender: "Male",
    ip_address: "217.2.135.13",
  },
  {
    id: 4,
    first_name: "Euphemia",
    last_name: "Ditty",
    email: "editty3@marketwatch.com",
    gender: "Genderfluid",
    ip_address: "164.66.169.192",
  },
  {
    id: 5,
    first_name: "Ferrell",
    last_name: "Gamett",
    email: "fgamett4@eepurl.com",
    gender: "Male",
    ip_address: "100.79.137.12",
  },
  {
    id: 6,
    first_name: "Tailor",
    last_name: "Stedman",
    email: "tstedman5@seesaa.net",
    gender: "Male",
    ip_address: "90.83.236.147",
  },
  {
    id: 7,
    first_name: "Warden",
    last_name: "Anderbrugge",
    email: "wanderbrugge6@ucoz.com",
    gender: "Male",
    ip_address: "48.142.131.223",
  },
  {
    id: 8,
    first_name: "Hasheem",
    last_name: "Whetland",
    email: "hwhetland7@squidoo.com",
    gender: "Male",
    ip_address: "74.27.74.182",
  },
  {
    id: 9,
    first_name: "Lorrie",
    last_name: "Kulic",
    email: "lkulic8@networksolutions.com",
    gender: "Polygender",
    ip_address: "8.172.207.101",
  },
  {
    id: 10,
    first_name: "Rafe",
    last_name: "Attfield",
    email: "rattfield9@etsy.com",
    gender: "Male",
    ip_address: "92.57.65.160",
  },
];

export default MuiTable;
