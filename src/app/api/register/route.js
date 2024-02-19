import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../libs/mongodb"
import User from "../../../models/user"
import bcrypt from "bcryptjs"

export async function POST(req){
    try{ 
        const {nome, email, password} = await req.json() 
        const hashedPassord = await bcrypt.hash(password, 10) 

        await connectMongoDB()
        await User.create({nome, email, password : hashedPassord})



        return NextResponse.json({message: "User registered."}, {status: 201})
    } catch (error){
        return NextResponse.json(
            {message:  "an error accurred while resgistering the user."}, {status: 500}
        )
    }

}

export async function GET(req) {
    try {
        const { userId } = req.query; // Supondo que o ID do usuário seja passado como parte da consulta

        await connectMongoDB();
        
        const user = await User.findById(userId, { password: 0 }); // Exclui o campo de senha da resposta

        if (!user) {
            return NextResponse.json(
                { message: "Usuário não encontrado." },
                { status: 404 }
            );
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Ocorreu um erro ao recuperar o usuário." },
            { status: 500 }
        );
    }
}