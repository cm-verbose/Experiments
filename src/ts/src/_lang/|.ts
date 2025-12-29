// (TypeScript)
// The vertical line operator (|) indicates a type union, in other words, types
// that is one of multiple specified types within this union. For example, we
// may have a simple union with two strings:

type state = "Pass" | "Fail";

// Using this type in a function for example, we can only have the values "Pass"
// or "Fail" passed to this function.

function getStatus(state: state) {
  switch (state) {
    case "Pass":
      break;
    case "Fail":
      break;
    // No need for a default here, since all states are matched
  }
}

// input values also correspond to the state
getStatus("Fail");

export {};
