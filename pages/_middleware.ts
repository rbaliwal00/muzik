import { NextResponse } from "next/server";

const signedInPages =['/', '/playlist', '/library'];

export default function middlware(req){
    if(signedInPages.find((p) => p===req.nextUrl.pathname)){
        const token = req.cookies.MUZIK_ACCESS_TOKEN;

        if(!token){
            return NextResponse.redirect('/signin');
        }
    }
}