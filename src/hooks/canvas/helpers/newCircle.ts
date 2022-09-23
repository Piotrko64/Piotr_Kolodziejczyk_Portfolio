import { configCanvas } from "../../../config/configCanvas";
import { randomNumber } from "../../../utils/randomNumber";

const { MIN_SIZE, MAX_SIZE, MIN_SPEED, MAX_SPEED } = configCanvas;

export function newCircle(
    ctx: CanvasRenderingContext2D,
    coordinateX: number,
    coordinateY: number,
    colorRGB: string
) {
    const speedX = randomNumber(MIN_SPEED, MAX_SPEED);
    const speedY = -randomNumber(MIN_SPEED, MAX_SPEED);

    let xCoordinate = coordinateX;
    let yCoordinate = coordinateY;
    let size = randomNumber(MIN_SIZE, MAX_SIZE);
    let opacity = randomNumber(10, 80) / 100;

    return {
        update() {
            xCoordinate += speedX;
            yCoordinate += speedY;
            if (size >= 0.2) {
                size -= 0.15;
                opacity -= 0.001;
            }
        },
        draw() {
            ctx.fillStyle = `RGBA(${colorRGB},${opacity})`;

            ctx.fillRect(xCoordinate, yCoordinate, size, size);
        },
        size() {
            return size;
        },
    };
}
