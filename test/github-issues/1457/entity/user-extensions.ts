import { BaseEntity, Column } from "../../../../src/index";

export class MyUserExtension extends BaseEntity {
    @Column({ extendEntity: "MyUser" })
    newField: string;
}
