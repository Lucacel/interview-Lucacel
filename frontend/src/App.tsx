import React, { Component } from "react";
import { Button } from "./components/ui/button";
import { Search } from "./components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import logo from './logo.svg';

const queryClient = new QueryClient();

class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-onyx p-8">
          <Search />
        </div>
      </QueryClientProvider>
    );
  }
}

export default App;
