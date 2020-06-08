import { Module } from "@nestjs/common";
import { AddController } from "./add.controller";
import { AppService } from "src/app.parser";

@Module({
    controllers:[AddController],
    providers: [AppService]
})

export class AddModule{}