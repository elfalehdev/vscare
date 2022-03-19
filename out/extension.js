"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const HelloWorldPanel_1 = require("./HelloWorldPanel");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand("vscare.Test", () => {
        HelloWorldPanel_1.HelloWorldPanel.createOrShow(context.extensionUri);
    }));
    vscode.commands.registerCommand("vscare", async () => {
        const answer = await vscode.window.showInformationMessage("How was your day?", "good", "bad");
        if (answer === "bad") {
            vscode.window.showInformationMessage("Sorry to hear that");
        }
        else {
            vscode.window.showInformationMessage("Glad to hear that.");
        }
        function update() {
            vscode.window.showInformationMessage("Straighten your position");
        }
        setTimeout(update, 1000);
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map