import { ReactComponent as back } from './svgs/back.svg'
import { ReactComponent as arrowleft } from './svgs/arrow-left.svg'
import { ReactComponent as arrowright} from './svgs/arrow-right.svg'
import { ReactComponent as profile } from './svgs/profile.svg'

const icons = {
    back,
    arrowleft,
    arrowright,
    profile,
}

export const Icon = ({name, ...props}) => {
    const Element = icons[name]
    return <Element {...props} />
}