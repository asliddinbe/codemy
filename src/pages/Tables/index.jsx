import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";

function createData(text, name, calories, fat, carbs, protein) {
  return {
    text,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(
    "Charde Marshall",
    "Accountant",
    "Milan",
    37,
    "2008/11/4",
    "$470.000"
  ),
  createData(
    "Colleen Hurst",
    "Chief Executive Officer (CEO)",
    "Tokyo",
    25,
    "2009/3/24",
    "$490.000"
  ),
  createData(
    "Dai Rios",
    "Junior Technical Author",
    "Bangladesh",
    16,
    "2009/8/10",
    "$60.000"
  ),
  createData(
    "Donna Snider",
    "Software Engineer",
    "Vetnam",
    62,
    "2005/4/4",
    "$40.000"
  ),
  createData(
    "Doris Wilder",
    "Software Engineer",
    "New York",
    36,
    "2006/11/19",
    "$39.000"
  ),
  createData(
    "Finn Camacho",
    "Integration Specialist",
    "Paris",
    32,
    "2010/2/7",
    "$65.000"
  ),
  createData(
    "Fiona Green",
    "Software Engineer",
    "Moscow",
    59,
    "2013/10/18",
    "$43.000"
  ),
  createData(
    "Garrett Winters",
    "Pre-Sales Support",
    "Tashkent",
    43,
    "2006/8/22",
    "$340.000"
  ),
  createData(
    "Gavin Cortez",
    "Sales Assistant",
    "Roma",
    26,
    "2006/8/25",
    "$70.000"
  ),
  createData(
    "Gavin Joyce",
    "Senior Javascript Developer",
    "Istanbbul",
    32,
    "2004/10/16",
    "$95.000"
  ),
  createData(
    "Ashton Cox",
    "Position",
    "New Zelland",
    40,
    "2011/9/23",
    "$20.000"
  ),
  createData(
    "Brielle Williamson",
    "Regional Director",
    "Washimgton",
    19,
    "2001/3/15",
    "$370.000"
  ),
  createData(
    "Bruno Nash",
    "Javascript Developer",
    "Nagasaki",
    58,
    "2002/10/10",
    "$40.000"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "text",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Position",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Office",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Age",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Data",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Salary",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        background: "#F8F9FC",
        borderBottom: "1px solid #E7E7E7",
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
          color="primary"
        >
          DataTables Example
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "Search:";
    }

    return "Search:";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box
      sx={{
        width: "90%",
        background: "#F8F9FC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "50px 0px 50px 0px",
      }}
    >
      <Box sx={{ margin: "0px 0px 30px 0px", float: "left" }}>
        <Typography variant="h4" sx={{ ml: 3 }}>
          Tables
        </Typography>
        <Typography variant="body2" sx={{ ml: 3 }}>
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <Link>official DataTables documentation.</Link>
        </Typography>
      </Box>
      <Paper
        sx={{
          width: "90%",
          mb: 2,
          boxShadow: "4px 4px 20px 20px #E7E7E7",
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
            sx={{ ml: "10px" }}
          />
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              mr: "10px",
              alignItems: "center",
            }}
          >
            <MyFormHelperText />
            <OutlinedInput
              placeholder="Please enter text"
              sx={{ height: "30px", width: "55%" }}
            />
          </FormControl>
        </Box>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.text)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.text}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.text}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderLeft: "1px solid #E7E7E7" }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderLeft: "1px solid #E7E7E7" }}
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderLeft: "1px solid #E7E7E7" }}
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderLeft: "1px solid #E7E7E7" }}
                      >
                        {row.carbs}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderLeft: "1px solid #E7E7E7" }}
                      >
                        {row.protein}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
