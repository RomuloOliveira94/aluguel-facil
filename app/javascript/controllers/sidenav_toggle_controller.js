import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="sidenav-toggle"
export default class extends Controller {
  static targets = ["sidebar"];

  toggle() {
    this.sidebarTarget.classList.toggle("collapsed");
  }
}
