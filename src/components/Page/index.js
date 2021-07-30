import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './page.scss';
import Nav from 'src/components/Nav';
import Accueil from 'src/components/Page/Accueil';
import Group1 from 'src/components/Page/Group1';
import Group2 from 'src/components/Page/Group2';
import Group3 from 'src/components/Page/Group3';
import Group4 from 'src/components/Page/Group4';
import Group5 from 'src/components/Page/Group5';
import Group6 from 'src/components/Page/Group6';
import Panier from 'src/components/Page/Panier';

const Page = () => (
  <main className="page">
    <Nav />
    <section className="page_content">
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/group1" component={Group1} />
        <Route path="/group2" component={Group2} />
        <Route path="/group3" component={Group3} />
        <Route path="/group4" component={Group4} />
        <Route path="/group5" component={Group5} />
        <Route path="/group6" component={Group6} />
        <Route path="/Panier" component={Panier} />
      </Switch>
    </section>
  </main>
);
export default Page;
