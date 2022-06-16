import moment from "moment"
import { STEPS } from "../constants"

export const generateShippingSteps= () => {
    const steps = Object.keys(STEPS).map(stepKey => {
        if (STEPS[stepKey] === STEPS.ORDER_PLACE) {
            return {
                fromDate: moment().format("MMM DD"),
                label: STEPS[stepKey]
            }
        }
        if (STEPS[stepKey] === STEPS.ORDER_SHIP) {
            return {
                fromDate: moment().add(2, 'days').format("MMM DD"),
                toDate: moment().add(3, 'days').format("DD"),
                label: STEPS[stepKey]
            }
        }
        if (STEPS[stepKey] === STEPS.DELIVERED) {
            return {
                fromDate: moment().add(4, 'days').format("MMM DD"),
                toDate: moment().add(8, 'days').format("DD"),
                label: STEPS[stepKey]
            }
        }
    })

    return steps;
}