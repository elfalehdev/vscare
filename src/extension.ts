import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(
    vscode.commands.registerCommand("vscare.Test",() => {
        HelloWorldPanel.createOrShow(context.extensionUri);
    })
  );

    vscode.commands.registerCommand("vscare", async () => {
      const answer = await vscode.window.showInformationMessage(
        "How was your day?",
        "good",
        "bad"
      );

      if (answer === "bad") {
        vscode.window.showInformationMessage("Sorry to hear that");
      } else {
        vscode.window.showInformationMessage("Glad to hear that.");
      }

	  function update(){
		  vscode.window.showInformationMessage("Straighten your position");
	  }
	  setTimeout(update,1000);
	});
}

export function deactivate(): void {}
