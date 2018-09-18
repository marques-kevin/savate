import Emotion from "react-emotion";

export const Container = Emotion("div")(
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer"
  },
  ({ active, theme }) => ({
    color: active ? theme.colors.blue : theme.colors.gray
  })
);

export const Name = Emotion("div")({
  textTransform: "uppercase",
  fontSize: "8px",
  fontWeight: "bold",
  marginTop: "5px"
});
