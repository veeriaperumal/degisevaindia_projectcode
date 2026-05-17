import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const navigate = useNavigate();

  const handleToggle = () => setOpen((prevOpen) => !prevOpen);
  const handleClose = () => setOpen(false);

  const services = [
    {
      name: "Global Education",
      path: "/global",
    },
    {
      name: "Business Setup",
      path: "/business",
    },

    {
      name: "Financial",
      path: "/financial",
    },
    {
      name: "Tender Services",
      path: "/tenders",
    },
    {
      name: "FSSAI & Food Licensing",
      path: "/fssai",
    },
    {
      name: "ISO Certification",
      path: "/iso",
    },
    {
      name: "Government Services",
      path: "/government-services",
    },
    {
      name: "Property Services",
      path: "/property-services",
    },
    {
      name: "Web Development",
      path: "/web-development",
    },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        px: { xs: 2, sm: 3, md: 10 },
        position: "relative",
        zIndex: 10,
        mt: -5,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "700px" }}>
        {/* SEARCH BAR */}
        <Paper
          ref={anchorRef}
          elevation={4}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50px",
            p: 0.6,
            border: "1px solid #e0f2fe",
            backgroundColor: "#fff",
          }}
        >
          <Button
            onClick={handleToggle}
            variant="contained"
            disableElevation
            endIcon={
              open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
            }
            sx={{
              borderRadius: "40px",
              px: { xs: 2, sm: 4 },
              py: 1.5,
              textTransform: "none",
              backgroundColor: "#1da1f2",
              whiteSpace: "nowrap",
              fontWeight: 500,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            All Services
          </Button>

          <Box
            onClick={handleToggle}
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ml: 2,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                color: "#0a0b0d",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Select for services...(e.g, GST Registration, Study Abroad)
            </Typography>
          </Box>
        </Paper>

        {/* DROPDOWN */}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
          sx={{
            zIndex: 12,
            width: anchorRef.current
              ? anchorRef.current.clientWidth
              : "auto",
            mt: 1,
          }}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.12)",
                  border: "1px solid #e2e8f0",
                  p: 2,
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                      },
                      columnGap: 2,
                      rowGap: 0.5,
                    }}
                  >
                    {services.map((service) => (
                      <Box
                        key={service.name}
                        onClick={() =>
                          handleServiceClick(service.path)
                        }
                        sx={{
                          py: 1,
                          px: 1.5,
                          borderRadius: "8px",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#f1f5f9",
                            color: "#1da1f2",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                          }}
                        >
                          {service.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </Box>
  );
};

export default SearchSection;