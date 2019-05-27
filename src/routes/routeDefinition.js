export function root(){
    return '/';
}

export function demoRoute(){
    return `${root()}demo`;
}

export function demoNameRoute(name=':name'){
    return `${root()}demo/${name}`;
}