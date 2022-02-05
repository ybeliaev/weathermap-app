import {useContext} from "react";
import {GlobalContext} from "../components/App";

export const withGlobalState = Component => (props) => {
    const {state} = useContext(GlobalContext)
    return <Component {...{...props, state}} />
}