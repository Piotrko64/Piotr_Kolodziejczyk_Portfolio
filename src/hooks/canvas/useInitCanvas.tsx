import { saveCoordinates } from "./helpers/saveCoordinates";
import { updateCanvasSize } from "./helpers/updateCanvasSize";
import { handleShapes } from "./helpers/handleShapes";
import { newCircle } from "./helpers/newCircle";
import { CircleArrayType } from "../../@types/Canvas/ShapeArrayType";
import { useSettings } from "../../store/settings";
import { randomNumber } from "../../utils/randomNumber";
import { configCanvas } from "../../config/configCanvas";

export function useInitCanvas() {
    const { COLOR_DARK } = configCanvas;
    const { bubbleColor } = useSettings((state) => state);

    function animateCanvas(canvasElement: HTMLCanvasElement) {
        const ctx = canvasElement.getContext("2d")!;
        if (!ctx) return;
        const arrayCircle: CircleArrayType = [];

        let [xCoordinate, yCoordinate]: [number, number] = [0, 0];

        updateCanvasSize(canvasElement);

        window.addEventListener("mousemove", function (event) {
            [xCoordinate, yCoordinate] = saveCoordinates(event);

            init();
        });

        function init() {
            if (
                randomNumber(0, 1) > 0 ||
                screen.availHeight < yCoordinate + window.scrollY
            ) {
                return;
            }

            for (let i = 0; i < 1; i++) {
                arrayCircle.push(
                    newCircle(ctx, xCoordinate, yCoordinate, bubbleColor)
                );
            }
        }

        function animate() {
            ctx.fillStyle = COLOR_DARK;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
            handleShapes(arrayCircle);
            requestAnimationFrame(animate);
        }
        animate();
    }

    return { animateCanvas };
}
