import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Hello, TNC China Users!</h1>
            <img src="/images/logo.svg" alt="sample React image" />
        </div>;
    }
}
