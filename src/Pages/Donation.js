import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from "@mui/material";

const Donation = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #f5f7fa, #c3cfe2)",
        padding: 4,
      }}
    >
      {/* Card for QR Code */}
      <Card
        sx={{
          maxWidth: 400,
          padding: 3,
          borderRadius: 4,
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
          background: "#ffffff",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image="/images/Gpay.jpeg"
          alt="QR Code"
          sx={{
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            marginBottom: 2,
          }}
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              marginBottom: 1,
            }}
          >
            Arti Niradhar Foundation
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#555",
              marginBottom: 2,
            }}
          >
            Please scan the QR code to donate.
          </Typography>
        </CardContent>
      </Card>

      {/* Payment Details Section */}
      <Box
        sx={{
          marginTop: 4,
          padding: 3,
          maxWidth: 600,
          background: "#f8f9fa",
          borderRadius: 4,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333", marginBottom: 2 }}>
          Another Way to Donate
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", marginBottom: 1 }}>
          <strong>Bank Name:</strong> Bank of India - Chiplun Branch
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", marginBottom: 1 }}>
          <strong>SB A/C:</strong> 141110210000240
        </Typography>
        <Typography variant="body1" sx={{ color: "#555" }}>
          <strong>IFSC Code:</strong> BKID0001411
        </Typography>
      </Box>
    </Box>
  );
};

export default Donation;
