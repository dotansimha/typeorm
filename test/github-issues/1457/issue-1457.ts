import "reflect-metadata";
import { expect } from "chai";

import { Connection } from "../../../src/connection/Connection";
import { closeTestingConnections, createTestingConnections, reloadTestingDatabases } from "../../utils/test-utils";
import { MyUser } from "./entity/user";
import { MyUserExtension } from "./entity/user-extensions";
import {getMetadataArgsStorage} from "../../../src";

describe("github issues > #1457 Test for mixins", () => {
    let connections: Connection[] = [];
    before(async () => connections = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        enabledDrivers: ["websql"]
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should extend the User type using UserExtension class", () => {
        expect(MyUser).not.undefined;
        expect(MyUserExtension).not.undefined;
        const userColumns = getMetadataArgsStorage().columns.filter(c => c.target === MyUser);
        expect(userColumns.length).eq(3);
        expect(userColumns.map(c => c.propertyName)).eql(["id", "name", "newField"]);
    });
});
