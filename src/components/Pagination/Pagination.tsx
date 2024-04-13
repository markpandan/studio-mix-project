import { Button, HStack } from "@chakra-ui/react";
import usePageCounter from "../../hooks/usePageCounter";
import { projectColorSecondary } from "../../theme";

interface Props {
  count: number;
}
const Pagination = ({ count }: Props) => {
  const limit = 8;
  const pages: number = Math.ceil(count / limit);
  const { active, handlePages: setActive } = usePageCounter(pages);

  if (pages > 0) {
    return (
      <HStack spacing={2} justify={"center"}>
        <Button onClick={() => setActive(active - 1)}>Prev</Button>
        {[...Array(pages)].map((_, i) => (
          <Button
            key={i}
            bgColor={active == i ? projectColorSecondary : ""}
            onClick={() => setActive(i)}
          >
            {i + 1}
          </Button>
        ))}
        <Button onClick={() => setActive(active + 1)}>Next</Button>
      </HStack>
    );
  } else {
    return;
  }
};

export default Pagination;
