var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
function Avatar(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Root, Object.assign({ "data-slot": "avatar", className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className) }, props)));
}
function AvatarImage(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Image, Object.assign({ "data-slot": "avatar-image", className: cn("aspect-square size-full", className) }, props)));
}
function AvatarFallback(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Fallback, Object.assign({ "data-slot": "avatar-fallback", className: cn("bg-muted flex size-full items-center justify-center rounded-full", className) }, props)));
}
export { Avatar, AvatarImage, AvatarFallback };
