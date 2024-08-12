import { useContext } from "react"
import { GlobalContext } from "../../context"

function ContextButtonComponent() {
    const { handleChangeTheme } = useContext(GlobalContext)
    return <button onClick={handleChangeTheme}>Change Theme</button>
}

export default ContextButtonComponent