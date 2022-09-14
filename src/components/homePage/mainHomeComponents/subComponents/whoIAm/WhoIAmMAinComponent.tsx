import { ColorfulName } from "./colorfulName/ColorfulName";
import { HelloIAm } from "./helloIAm/HelloIAm";
import { ShortDescribe } from "./shortDescribe/ShortDescribe";

export function WhoIAmMainComponent() {
    return (
        <>
            <HelloIAm />
            <ColorfulName />
            <ShortDescribe />
        </>
    );
}
