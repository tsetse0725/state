import Counter from "@/components/Counter";
import InputName from "@/components/InputName";
import RandomColorBox from "@/components/RandomColorBox";
import MyPeopleApp from "@/components/MyPeopleApp";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 0",
      }}
    >
      <Counter />
      <InputName />
      <RandomColorBox />
      <MyPeopleApp />
    </div>
  );
}
