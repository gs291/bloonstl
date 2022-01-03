export default function CritOccurrenceTooltip({critOccurrence}) {
    if (critOccurrence === "0~0") {
        return 'Critical damage never occurs.'
    }

    const co = critOccurrence.match(/(\d*)~(\d*)/);
    if (co) {
        return `Critical damage occurs every ${co[1]} to ${co[2]} shots`
    } else {
        return `Critical damage occurs every ${critOccurrence} shots`;
    }
};