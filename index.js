const something = (value) => {
  const r1 = Math.floor(Math.random() * 100);

  const inside = () => {
    const r2 = Math.floor(Math.random() * 100);
    console.log({ r1, r2, value });
  };

  return inside;
};

const first = something("first");
const second = something("second");

first();
second();
first();
second();
first();
