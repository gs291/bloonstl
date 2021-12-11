import voteQueries from "../graphql/queries/voteQueries";


export const parseMonkeyForm = (form) => {
    let body = {};
    let pros = [], cons = [];
    const prosCons = Object.keys(siteProsCons);

    prosCons.forEach(pro => {
       if (form[`pro-${pro}`].checked){
           pros.push(pro);
       }
    });

    prosCons.forEach(con => {
        if (form[`con-${con}`].checked){
            cons.push(con);
        }
    });


    const topPath = parseInt(form["slider-top"].value);
    const middlePath = parseInt(form["slider-middle"].value);
    const bottomPath = parseInt(form["slider-bottom"].value);
    if (topPath > 0 || middlePath > 0 || bottomPath > 0) {
        if (form["ability-tier"].value === "") {
            return {"err": "Ability path selected yet ability path tier is not"};
        }

        const pathError = formAbilityPathError(topPath, middlePath, bottomPath);

        if (pathError) {
            return pathError;
        }
    }

    if ((pros.length || cons.length) && form["ability-tier"].value === "") {
        return {"err": "Ability pros/cons selected yet ability path tier is not"};
    }

    body.tower = form.tower.value.slice(2);
    body["tower_tier"] = form["tower-tier"].value;

    if (form["ability-tier"].value) {
        body["ability_tier"] = form["ability-tier"].value
        body["ability_top"] =  topPath;
        body["ability_middle"] =  middlePath;
        body["ability_bottom"] =  bottomPath;

        if (pros.length) { body.pros = pros.join(','); }
        if (cons.length) { body.cons = cons.join(','); }
    }

    return body;
}

export const parseHeroForm = (form) => {
    let body = {};
    let pros = [], cons = [];
    const prosCons = Object.keys(siteProsCons);

    prosCons.forEach(pro => {
        if (form[`pro-${pro}`].checked){
            pros.push(pro);
        }
    });

    prosCons.forEach(con => {
        if (form[`con-${con}`].checked){
            cons.push(con);
        }
    });

    body.tower = form.tower.value.slice(2);
    body["tower_tier"] = form["tower-tier"].value;

    if (pros.length) { body.pros = pros.join(','); }
    if (cons.length) { body.cons = cons.join(','); }

    return body;
}

const formAbilityPathError = (topPath, middlePath, bottomPath) => {
    if ((topPath > 0 && topPath < 3) && (middlePath > 0 && middlePath < 3) && (bottomPath > 0 && bottomPath < 3)) {
        return {"err": "Bottom path not allowed"}
    }

    // Keeps all paths to BTD 6 X-X-X format
    // (i.e 5-X-0, 5-0-X, X-5-0, 0-5-X, X-0-5, 0-X-5)
    if (topPath > 2) {
        if (middlePath > 0) {
            if (middlePath > 2) { return {"err": "Middle path not allowed"} }
            if (bottomPath !== 0) { return {"err": "Bottom path not allowed"} }
        } else if (bottomPath > 0) {
            if (bottomPath > 2) { return {"err": "Bottom path not allowed"} }
            if (middlePath !== 0) { return {"err": "Middle path not allowed"} }
        }
    }
    if (middlePath > 2) {
        if (topPath > 0) {
            if (topPath > 2) { return {"err": "Top path not allowed"} }
            if (bottomPath !== 0) { return {"err": "Bottom path not allowed"} }
        } else if (bottomPath > 0) {
            if (bottomPath > 2) { return {"err": "Bottom path not allowed"} }
            if (topPath !== 0) { return {"err": "Top path not allowed"} }
        }
    }
    if (bottomPath > 2) {
        if (topPath > 0) {
            if (topPath > 2) { return {"err": "Middle path not allowed"} }
            if (middlePath !== 0) { return {"err": "Middle path not allowed"} }
        } else if (middlePath > 0) {
            if (middlePath > 2) { return {"err": "Middle path not allowed"} }
            if (topPath !== 0) { return {"err": "Top path not allowed"}}
        }
    }
}

export const sendVote = async (query, body, controller, ignore, setProgress) => {
    let responseBody = {};
    setProgress(prg => ({
        ...prg,
        isLoading: true,
        isError: false,
        isSuccess: false
    }));

    try {
        const res = await fetch(
            `${window.location.protocol}//${window.location.host}/api/graphql`,
            {
                signal: controller.signal,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: {
                        vote: body
                    }
                })
            }
        );
        responseBody = await res.json();
    } catch (e) {
        if (e instanceof DOMException) {
            console.log("HTTP request aborted");
        } else {
            setProgress(prg => ({...prg, isError: true,}));
            console.log(e);
        }
    }

    if (!ignore.ignore) {
        setProgress(prg => ({
            ...prg,
            isLoading: false,
            isSuccess: true
        }));
        console.log(responseBody);
    }
}

const checkVoteTier = (tier) => {
    return tier === "s" || tier === "a" || tier === "b";
}

const getValidVoteProsCons = (pros, cons) => {
    let prosList = [], consList = [];
    if (pros) {
        prosList = pros.split(',');
        prosList = prosList.filter(pro => siteProsCons[pro]);
    }
    if (cons) {
        consList = cons.split(',');
        consList = consList.filter(con => siteProsCons[con]);
    }

    return {
        "pros": prosList.join(','),
        "cons": consList.join(',')
    }
}

export const parseVoteSubmission = (vote) => {
    if (!checkVoteTier(vote.tower_tier)) {
        return {"err": "Invalid tower tier"};
    }

    if (vote.ability_tier) {
        if(!checkVoteTier(vote.ability_tier)) {
            return {"err": "Invalid ability path tier"};
        }

        if (typeof vote.ability_top !== "number" || typeof vote.ability_middle !== "number" || typeof vote.ability_bottom !== "number") {
            return {"err": "Some or all ability paths missing"};
        }
        const pathError = formAbilityPathError(vote.ability_top, vote.ability_middle, vote.ability_bottom);
        if (pathError) {
            return pathError;
        }

        if (vote.pros || vote.cons) {
            const {pros, cons} = getValidVoteProsCons(vote.pros, vote.cons);
            vote.pros = pros;
            vote.cons = cons;
        }
    }

    return vote;
}

