import { useContext } from "react";
import BookContext from "../context/Books";

function useBooksContext() {
    return useContext(BookContext);
}

export default useBooksContext;
