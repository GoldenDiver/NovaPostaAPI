import { Box, Stack, Typography } from "@mui/material";

export default function StatusInvoice({
  status: { status, warehouseSender, warehouseRecipient },
}) {
  return (
    <Stack sx={{ width: "50%" }} spacing={2} direction="row">
      <Stack spacing={5} textAlign="left" width={"30%"}>
        <Typography sx={{ fontWeight: "bold" }}>Статус доставки:</Typography>
        <Typography sx={{ fontWeight: "bold" }}>Відправлено:</Typography>
        <Typography sx={{ fontWeight: "bold" }}>Отримано:</Typography>
      </Stack>
      <Stack spacing={5} textAlign="left">
        <Typography>{status}</Typography>
        <Typography>{warehouseSender}</Typography>
        <Typography>{warehouseRecipient}</Typography>
      </Stack>
    </Stack>
  );
}
